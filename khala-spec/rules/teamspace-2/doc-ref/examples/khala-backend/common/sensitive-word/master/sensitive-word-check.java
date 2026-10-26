package com.eshore.khala.example.sensitiveword;

import com.eshore.khala.starter.sensitive.word.SensitiveWordManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

/**
 * 敏感词检测示例
 *
 * &lt;p&gt;通过 SensitiveWordManager 进行敏感词的检测、过滤和高亮&lt;/p&gt;
 * &lt;p&gt;支持 DFA、Bucket、TTMP 等多种算法&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/sensitive&quot;)
@RequiredArgsConstructor
public class SensitiveWordCheckController {

    private final SensitiveWordManager sensitiveWordManager;

    /**
     * 判断文本是否包含敏感词
     *
     * &lt;p&gt;contains(): 完整匹配&lt;/p&gt;
     * &lt;p&gt;contains(true, content): 支持部分匹配（匹配词语的一部分）&lt;/p&gt;
     */
    @GetMapping(&quot;/contains&quot;)
    public boolean contains(@RequestParam String content) {
        return sensitiveWordManager.contains(content);
    }

    /**
     * 检测文本中的敏感词
     *
     * &lt;p&gt;返回匹配到的敏感词集合&lt;/p&gt;
     */
    @GetMapping(&quot;/check&quot;)
    public Set&lt;String&gt; check(@RequestParam String content) {
        return sensitiveWordManager.check(content);
    }

    /**
     * 高亮敏感词
     *
     * &lt;p&gt;将文本中的敏感词用 HTML 标签包裹（默认 &amp;lt;font color=&#39;red&#39;&amp;gt;）&lt;/p&gt;
     */
    @GetMapping(&quot;/highlight&quot;)
    public String highlight(@RequestParam String content) {
        return sensitiveWordManager.highlight(content);
    }

    /**
     * 过滤敏感词
     *
     * &lt;p&gt;将敏感词替换为指定字符（默认 *）&lt;/p&gt;
     */
    @GetMapping(&quot;/filter&quot;)
    public String filter(@RequestParam String content,
                         @RequestParam(required = false) Character replaceChar) {
        if (replaceChar != null) {
            return sensitiveWordManager.filter(content, replaceChar);
        }
        return sensitiveWordManager.filter(content);
    }

    /**
     * 手动刷新敏感词库
     *
     * &lt;p&gt;当敏感词数据源变更后，手动调用刷新以重新加载词库&lt;/p&gt;
     * &lt;p&gt;也可开启自动刷新：khala.sensitive.word.auto-refresh=true&lt;/p&gt;
     */
    @PostMapping(&quot;/refresh&quot;)
    public String refresh() {
        sensitiveWordManager.refresh();
        return &quot;敏感词库已刷新&quot;;
    }
}
