package com.eshore.khala.example.es;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Elasticsearch 文档 CRUD 示例
 *
 * &lt;p&gt;使用 Spring Data Elasticsearch 提供的 ElasticsearchRepository 进行文档操作&lt;/p&gt;
 */
public class EsCrudExample {

    /**
     * 文档实体定义
     */
    @Data
    @Document(indexName = &quot;khala_article&quot;)
    public static class Article {
        @Id
        private String id;

        @Field(type = FieldType.Text, analyzer = &quot;ik_max_word&quot;)
        private String title;

        @Field(type = FieldType.Text, analyzer = &quot;ik_max_word&quot;)
        private String content;

        @Field(type = FieldType.Keyword)
        private String author;

        @Field(type = FieldType.Date)
        private String publishDate;
    }

    /**
     * Repository 接口
     */
    public interface ArticleRepository extends ElasticsearchRepository&lt;Article, String&gt; {
        List&lt;Article&gt; findByAuthor(String author);
        List&lt;Article&gt; findByTitle(String title);
    }

    /**
     * CRUD 业务示例
     */
    @Service
    public static class ArticleService {

        private final ArticleRepository articleRepository;

        public ArticleService(ArticleRepository articleRepository) {
            this.articleRepository = articleRepository;
        }

        /** 创建/更新文档 */
        public Article save(Article article) {
            return articleRepository.save(article);
        }

        /** 批量创建 */
        public Iterable&lt;Article&gt; saveAll(List&lt;Article&gt; articles) {
            return articleRepository.saveAll(articles);
        }

        /** 根据 ID 查询 */
        public Optional&lt;Article&gt; findById(String id) {
            return articleRepository.findById(id);
        }

        /** 查询所有 */
        public Iterable&lt;Article&gt; findAll() {
            return articleRepository.findAll();
        }

        /** 根据作者查询 */
        public List&lt;Article&gt; findByAuthor(String author) {
            return articleRepository.findByAuthor(author);
        }

        /** 删除文档 */
        public void deleteById(String id) {
            articleRepository.deleteById(id);
        }
    }
}
