import { afterEach, describe, expect, it, vi } from "vitest";

import { calculateReadTime, cleanTitle, createExcerpt, extractPlainText, GET, mapCategory, parseRSSXML } from "@/app/api/blog/route";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("blog route helpers", () => {
  it("extracts readable plain text", () => {
    expect(extractPlainText("<p>Hello&nbsp;Cloud</p>")).toBe("Hello Cloud");
  });

  it("handles empty and noisy content branches", () => {
    expect(extractPlainText("<script>alert(1)</script><p>safe</p><!--x-->")).toBe("safe");
    expect(createExcerpt("", 20)).toBe("블로그 포스트 내용을 확인하세요.");
  });

  it("creates excerpts and maps categories", () => {
    expect(createExcerpt("<p>Infrastructure automation is important.</p>", 20)).toContain("Infrastructure");
    expect(mapCategory("CI/CD")).toBe("Projects");
    expect(mapCategory("Unknown")).toBe("Tech");
  });

  it("parses rss xml item values", () => {
    const feed = parseRSSXML(`
      <rss>
        <channel>
          <item>
            <title><![CDATA[DevOps &amp; AWS]]></title>
            <link>https://example.com/post</link>
            <description><![CDATA[<p>hello</p>]]></description>
            <pubDate>2026-04-24</pubDate>
            <category><![CDATA[AWS]]></category>
            <guid>guid-1</guid>
          </item>
        </channel>
      </rss>
    `);

    expect(feed.items).toHaveLength(1);
    expect(cleanTitle(feed.items[0].title)).toBe("DevOps & AWS");
    expect(calculateReadTime(feed.items[0].description)).toBeGreaterThan(0);
  });

  it("falls back when rss fields are missing", () => {
    const feed = parseRSSXML(`
      <rss>
        <channel>
          <item>
            <title>Simple title</title>
          </item>
        </channel>
      </rss>
    `);

    expect(feed.items[0].link).toBe("#");
    expect(feed.items[0].category).toBe("Tech");
    expect(feed.items[0].guid).toBe("#");
  });

  it("returns parsed posts on successful rss fetch", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      text: async () => `
        <rss>
          <channel>
            <item>
              <title><![CDATA[Infra]]></title>
              <link>https://example.com/post</link>
              <description><![CDATA[<p>content</p>]]></description>
              <pubDate>2026-04-24</pubDate>
              <category><![CDATA[AWS]]></category>
              <guid>1</guid>
            </item>
          </channel>
        </rss>
      `,
    } as Response);

    const response = await GET();
    const body = await response.json();

    expect(body.posts).toHaveLength(1);
    expect(body.posts[0].title).toBe("Infra");
    expect(body.posts[0].category).toBe("AWS");
  });

  it("returns dummy posts when rss fetch fails", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("network"));

    const response = await GET();
    const body = await response.json();

    expect(body.posts).toHaveLength(2);
    expect(body.posts[0].category).toBe("Linux");
  });
});
