import { describe, expect, it } from "vitest";

import { calculateReadTime, cleanTitle, createExcerpt, extractPlainText, mapCategory, parseRSSXML } from "@/app/api/blog/route";

describe("blog route helpers", () => {
  it("extracts readable plain text", () => {
    expect(extractPlainText("<p>Hello&nbsp;Cloud</p>")).toBe("Hello Cloud");
  });

  it("creates excerpts and maps categories", () => {
    expect(createExcerpt("<p>Infrastructure automation is important.</p>", 20)).toContain("Infrastructure");
    expect(mapCategory("CI/CD")).toBe("Projects");
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
});
