import { enumApprovalType } from &#39;./enum.js&#39;
// 审批类型字典
export const approvalTypeOptions = [
    { label: &#39;人工审批&#39;, value: enumApprovalType.MANUAL },
    { label: &#39;自动通过&#39;, value: enumApprovalType.AUTO_PASS },
    { label: &#39;自动拒绝&#39;, value: enumApprovalType.AUTO_REJECT }
]