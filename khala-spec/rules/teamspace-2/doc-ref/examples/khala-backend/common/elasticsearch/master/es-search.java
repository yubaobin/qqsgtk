package com.eshore.khala.example.es;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.HighlightQuery;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Elasticsearch 搜索查询示例
 *
 * &lt;p&gt;使用 ElasticsearchOperations 进行复杂搜索、聚合、高亮等操作&lt;/p&gt;
 */
@Service
@RequiredArgsConstructor
public class EsSearchService {

    private final ElasticsearchOperations elasticsearchOperations;

    /**
     * 全文搜索
     *
     * &lt;p&gt;使用 match 查询对指定字段进行全文检索&lt;/p&gt;
     */
    public List&lt;Object&gt; fullTextSearch(String keyword) {
        NativeQuery query = NativeQuery.builder()
                .withQuery(q -&gt; q.match(m -&gt; m.field(&quot;content&quot;).query(keyword)))
                .build();
        SearchHits&lt;Object&gt; hits = elasticsearchOperations.search(query, Object.class);
        return hits.getSearchHits().stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());
    }

    /**
     * 多字段全文搜索
     */
    public List&lt;Object&gt; multiFieldSearch(String keyword) {
        NativeQuery query = NativeQuery.builder()
                .withQuery(q -&gt; q.multiMatch(m -&gt; m
                        .fields(&quot;title&quot;, &quot;content&quot;)
                        .query(keyword)))
                .build();
        SearchHits&lt;Object&gt; hits = elasticsearchOperations.search(query, Object.class);
        return hits.getSearchHits().stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());
    }

    /**
     * 布尔组合查询
     *
     * &lt;p&gt;must: 必须匹配；should: 可选匹配；mustNot: 必须不匹配&lt;/p&gt;
     */
    public List&lt;Object&gt; boolSearch(String title, String author) {
        NativeQuery query = NativeQuery.builder()
                .withQuery(q -&gt; q.bool(b -&gt; b
                        .must(m -&gt; m.match(mt -&gt; mt.field(&quot;title&quot;).query(title)))
                        .must(m -&gt; m.match(mt -&gt; mt.field(&quot;author&quot;).query(author)))))
                .build();
        SearchHits&lt;Object&gt; hits = elasticsearchOperations.search(query, Object.class);
        return hits.getSearchHits().stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());
    }

    /**
     * 分页查询
     */
    public Page&lt;Object&gt; pageSearch(String keyword, int pageNum, int pageSize) {
        NativeQuery query = NativeQuery.builder()
                .withQuery(q -&gt; q.match(m -&gt; m.field(&quot;content&quot;).query(keyword)))
                .withPageable(PageRequest.of(pageNum, pageSize))
                .build();
        SearchHits&lt;Object&gt; hits = elasticsearchOperations.search(query, Object.class);
        // 返回分页结果
        return hits.map(SearchHit::getContent);
    }

    /**
     * 高亮搜索
     *
     * &lt;p&gt;搜索结果中高亮显示匹配的关键词&lt;/p&gt;
     */
    public List&lt;Object&gt; highlightSearch(String keyword) {
        HighlightBuilder highlightBuilder = new HighlightBuilder()
                .field(&quot;title&quot;)
                .field(&quot;content&quot;)
                .preTags(&quot;&lt;em&gt;&quot;)
                .postTags(&quot;&lt;/em&gt;&quot;);

        NativeQuery query = NativeQuery.builder()
                .withQuery(q -&gt; q.match(m -&gt; m.field(&quot;content&quot;).query(keyword)))
                .withHighlightQuery(new HighlightQuery(highlightBuilder, Object.class))
                .build();
        SearchHits&lt;Object&gt; hits = elasticsearchOperations.search(query, Object.class);
        return hits.getSearchHits().stream()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());
    }
}
