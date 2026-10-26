# Khala 用户体系开发指南

## 目录
- [1. 数据库表结构](#1-数据库表结构)
  - [1.1 用户相关表](#11-用户相关表)
  - [1.2 组织相关表](#12-组织相关表)
  - [1.3 角色相关表](#13-角色相关表)
  - [1.4 租户相关表](#14-租户相关表)
  - [1.5 数据库表速查](#15-数据库表速查仅供参考只读)
- [2. Feign接口说明](#2-feign接口说明)
  - [2.1 通用返回结构](#21-通用返回结构)
  - [2.2 用户服务 (UserService)](#22-用户服务-userservice)
  - [2.3 组织服务 (OrgService)](#23-组织服务-orgservice)
  - [2.4 权限服务 (PermissionService)](#24-权限服务-permissionservice)
- [3. Feign调用方式](#3-feign调用方式)
- [4. 登录用户/租户信息](#4-登录用户租户信息)
- [5. 业务关联用户/角色/组织](#5-业务关联用户角色组织)
- [6. 快速参考](#6-快速参考)

---

## 1. 数据库表结构

### 1.1 用户相关表

#### 1.1.1 khala_sys_user (用户表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 用户id | 主键，自增 |
| username | varchar(50) | 用户名 | 必填，长度4-30 |
| password | varchar(128) | 密码 | 加密存储 |
| previous_password | varchar(128) | 上一次密码 | - |
| nickname | varchar(64) | 用户昵称 | - |
| real_name | varchar(64) | 用户名称 | 加密存储 |
| head_img_url | varchar(1024) | 用户头像 | - |
| mobile | varchar(64) | 手机号 | 加密存储 |
| sex | tinyint(1) | 用户性别 | - |
| type | varchar(16) | 用户类型 | 默认BACKEND |
| company | varchar(255) | 所属公司 | - |
| open_id | varchar(32) | openID | - |
| email | varchar(255) | 邮箱 | 加密存储 |
| sort | int(11) | 排序值 | - |
| identity_card_type | varchar(64) | 证件类型 | - |
| identity_card_no | varchar(100) | 证件号码 | 加密存储 |
| enabled | bit(1) | 是否有效 | 默认true |
| account_non_locked | bit(1) | 账号是否未被锁定 | 默认true |
| account_non_expired | bit(1) | 账号是否未过期 | 默认true |
| credentials_non_expired | bit(1) | 密码是否未过期 | 默认true |
| credentials_must_change | bit(1) | 密码是否需要强制更改 | 默认true |
| last_modified_password_time | datetime(1) | 最后修改密码时间 | - |
| last_login_time | datetime(1) | 最后登录时间 | - |
| persist | bit(1) | 保留数据 | 默认false，不允许删除 |
| create_by | bigint(20) | 创建人id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新者id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否删除 | 默认false |


#### 1.1.2 khala_sys_user_org (用户组织关联表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键 | 自增 |
| tenant_id | bigint(20) | 租户id | 默认1 |
| user_id | bigint(20) | 用户id | 默认0 |
| org_id | bigint(20) | 组织架构id | 默认0 |
| create_by | bigint(20) | 创建人id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新人id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否逻辑删除 | 默认false |

#### 1.1.3 khala_sys_user_post (用户岗位关联表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键id | 自增 |
| tenant_id | bigint(20) | 租户id | 默认1 |
| user_id | bigint(20) | 用户id | 默认0 |
| post_id | bigint(20) | 岗位id | 默认0 |
| create_by | bigint(20) | 创建人id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新人id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否逻辑删除 | 默认false |

### 1.2 组织相关表

#### 1.2.1 khala_sys_org (部门表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键id | 自增 |
| tenant_id | bigint(20) | 租户id | 默认1 |
| parent_id | bigint(20) | 父id | 默认0 |
| name | varchar(100) | 组织架构名称 | 必填 |
| code | varchar(100) | 组织架构编码 | - |
| sort | int(11) | 显示顺序 | 默认0 |
| leader_user_id | bigint(20) | 负责人 | - |
| mobile | varchar(11) | 联系电话 | - |
| email | varchar(100) | 邮箱 | - |
| status | tinyint(4) | 部门状态 | 0正常 1停用 |
| create_by | bigint(20) | 创建人id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新人id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否删除 | 默认false |

---

### 1.3 角色相关表

#### 1.3.1 khala_sys_role (角色表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 角色id | 主键，自增 |
| tenant_id | bigint(20) | 租户id | 默认1 |
| code | varchar(100) | 角色code | 必填 |
| name | varchar(100) | 角色名 | 必填 |
| status | tinyint(4) | 状态 | 0正常 1停用 |
| persist | bit(1) | 保留数据 | 默认false，不允许删除 |
| sort | int(11) | 排序 | - |
| create_by | bigint(20) | 创建用户id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新用户id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否逻辑删除 | 默认false |

**索引：**
- idx_code: code

#### 1.3.4 khala_sys_role_user (角色用户关联表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键 | 自增 |
| tenant_id | bigint(20) | 租户id | 默认1 |
| user_id | bigint(20) | 用户id | - |
| role_id | bigint(20) | 角色id | - |
| create_by | bigint(20) | 创建用户id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新用户id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否逻辑删除 | 默认false |

---

### 1.4 租户相关表

#### 1.4.1 khala_sys_tenant (租户表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键id | 自增 |
| name | varchar(100) | 租户名 | 必填 |
| code | varchar(100) | 租户编码 | 必填 |
| contact_name | varchar(64) | 联系人 | 必填 |
| contact_mobile | varchar(64) | 联系手机 | - |
| status | tinyint(4) | 租户状态 | 0正常 1停用，默认0 |
| persist | bit(1) | 保留数据 | 默认false |
| create_by | bigint(20) | 创建id | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新者id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否删除 | 默认false |

#### 1.4.2 khala_sys_tenant_user (用户租户关联表)

| 字段名 | 类型 | 说明 | 备注 |
|--------|------|------|------|
| id | bigint(20) | 主键id | 自增 |
| tenant_id | bigint(20) | 租户id | - |
| user_id | bigint(20) | 用户id | - |
| enabled | bit(1) | 租户下是否可用 | 默认true |
| bind_source | int(11) | 绑定来源 | 0:租户绑定，1：用户加入 |
| create_by | bigint(20) | 创建人 | 默认0 |
| create_time | datetime | 创建时间 | - |
| update_by | bigint(20) | 更新人Id | 默认0 |
| update_time | datetime | 更新时间 | - |
| deleted | bit(1) | 是否逻辑删除 | 默认false |

---

### 1.5 数据库表速查（仅供参考，只读）

| 表名 | 说明 | 所在服务 |
|------|------|---------|
| `khala_sys_user` | 用户表 | admin-center |
| `khala_sys_user_org` | 用户-组织关联 | admin-center |
| `khala_sys_user_post` | 用户-岗位关联 | admin-center |
| `khala_sys_org` | 组织/部门表 | admin-center |
| `khala_sys_role` | 角色表 | admin-center |
| `khala_sys_role_user` | 角色-用户关联 | admin-center |
| `khala_sys_tenant` | 租户表 | admin-center |
| `khala_sys_tenant_user` | 租户-用户关联 | admin-center |

> 这些表属于 admin-center 服务。**同数据库**情况下可直接 SQL 关联查询；**跨库**时必须通过 Feign 接口访问。

---

## 2. Feign接口说明

### 2.1 通用返回结构

所有接口返回值均为 `CommonResult<T>` 结构：

```json
{
  "traceId": "请求事务ID",
  "code": 0,          // 返回码，0表示成功
  "data": {},         // 返回数据
  "message": "提示信息"
}
```

**服务名称：** `admin-center`

---

### 2.2 用户服务 (UserService)

**接口路径：** `@FeignClient(name = "admin-center", path = "user")`

**方法速查：**

| 方法 | 接口 | 返回 |
|------|------|------|
| `findUserById(Long)` | GET `/user/find-by-userid` | `SysUser` |
| `findUserByUsername(String)` | GET `/user/find-by-username` | `SysUser` |
| `findUserByMobile(String)` | GET `/user/find-by-mobile` | `SysUser` |
| `findUserByOpenId(String)` | GET `/user/find-by-openid` | `SysUser` |
| `registerUser(UserRegisterReq)` | POST `/user/register` | `Long` |

#### 2.2.1 根据用户ID查询用户

**接口地址：** `GET /user/find-by-userid`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | Long | 是 | 用户ID |

**返回数据：** `SysUser` (用户实体对象)

**Feign调用示例：**
```java
import com.eshore.khala.common.model.CommonResult;
import com.eshore.khala.entity.user.SysUser;
@Autowired
private UserService userService;

public void getUserInfo() {
    CommonResult<SysUser> result = userService.findUserById(1L);
    if (result.isSuccess()) {
        SysUser user = result.getData();
        System.out.println("用户名：" + user.getUsername());
    }
}
```

---

#### 2.2.2 根据用户名查询用户

**接口地址：** `GET /user/find-by-username`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| username | String | 是 | 用户名 |

**返回数据：** `SysUser` (用户实体对象)

**Feign调用示例：**
```java
@Autowired
private UserService userService;

public void getUserByUsername() {
    CommonResult<SysUser> result = userService.selectByUsername("admin");
}
```

---

#### 2.2.3 根据手机号查询用户

**接口地址：** `GET /user/find-by-mobile`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| mobile | String | 是 | 手机号 |

**返回数据：** `SysUser` (用户实体对象)

**Feign调用示例：**
```java
@Autowired
private UserService userService;

public void getUserByMobile() {
    CommonResult<SysUser> result = userService.findByMobile("13800138000");
}
```

---

#### 2.2.4 根据OpenId查询用户

**接口地址：** `GET /user/find-by-openid`

**参数说明：** 

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| openId | String | 是 | openId |

**返回数据：** `SysUser` (用户实体对象)

**Feign调用示例：**
```java
@Autowired
private UserService userService;

public void getUserByOpenId() {
    CommonResult<SysUser> result = userService.findByOpenId("openid123");

}
```

---

#### 2.2.5 根据邮箱查询用户

**接口地址：** `GET /user/find-by-email`

**参数说明：** 

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| email | String | 是 | 邮箱 |

**返回数据：** `SysUser` (用户实体对象)

**Feign调用示例：**
```java
@Autowired
private UserService userService;

public void getUserByEmail() {
    CommonResult<SysUser> result = userService.findUserByEmail("user@example.com");

}
```

---

#### 2.2.7 注册用户

**接口地址：** `POST /user/register`

**请求参数 (UserRegisterReq)：** 

| 字段名 | 类型 | 必填 | 说明 | 示例值 |
|--------|------|------|------|--------|
| username | String | 是 | 用户账号 | admin |
| password | String | 是 | 密码 | 12qw!@QW |
| realName | String | 是 | 用户名称 | 张三 |
| nickname | String | 否 | 用户昵称 | 小张 |
| mobile | String | 是 | 手机号码 | 13800138000 |
| email | String | 否 | 用户邮箱 | user@example.com |
| sex | Integer | 否 | 用户性别 | 1 |
| headImgUrl | String | 否 | 用户头像 | https://example.com/avatar.png |
| type | String | 否 | 用户类型 | backend |
| openId | String | 否 | openId | openid123 |
| identityCardType | String | 否 | 证件类型 | 身份证 |
| identityCardNo | String | 否 | 证件号码 | 430423199001020111 |
| remark | String | 否 | 备注 | 备注信息 |
| enabled | Boolean | 否 | 是否可用 | true |
| checkFormat | Boolean | 否 | 是否检查密码格式 | true |

**返回数据：** `Long` (新注册用户的ID)

**Feign调用示例：**
```java
import com.eshore.khala.admin.pojo.user.req.UserRegisterReq;
@Autowired
private UserService userService;

public void registerUser() {
    UserRegisterReq req = new UserRegisterReq();
    req.setUsername("newuser");
    req.setPassword("Pass@1234");
    req.setRealName("新用户");
    req.setMobile("13900139000");
    req.setEnabled(true);

    CommonResult<Long> result = userService.registerUser(req);
    if (result.isSuccess()) {
        Long userId = result.getData();
        System.out.println("注册成功，用户ID：" + userId);
    }
}
```

---

### 2.3 组织服务 (OrgService)

**接口路径：** `@FeignClient(name = "admin-center", path = "org")`

**方法速查：**

| 方法 | 接口 | 返回 |
|------|------|------|
| `getSubOrgTreeByOrgId(Long)` | GET `/org/get-sub-org-tree-by-orgid` | `List<OrgVO>` |
| `getSubOrgIdsByOrgId(Long)` | GET `/org/get-sub-org-ids-by-orgid` | `List<Long>` |
| `getSubOrgIdsByOrgIds(Collection<Long>)` | GET `/org/get-sub-org-ids-by-orgids` | `List<Long>` |

#### 2.3.1 查询下级组织架构树

**接口地址：** `GET /org/get-sub-org-tree-by-orgid`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| orgId | Long | 是 | 组织架构ID |

**返回数据：** `List<OrgVO>` (下级组织架构树列表)

**OrgVO 结构说明：**

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | Long | 组织机构编号 |
| tenantId | Long | 租户编号 |
| tenantName | String | 租户名称 |
| code | String | 组织架构编码 |
| name | String | 组织架构名称 |
| parentId | Long | 父级编号 |
| sort | Integer | 显示顺序 |
| leaderUserId | Long | 负责人编号 |
| leaderUserName | String | 负责人用户名称 |
| mobile | String | 手机号码 |
| email | String | 邮箱 |
| status | Integer | 状态(0正常 1停用) |
| createTime | LocalDateTime | 创建时间 |

**Feign调用示例：**
```java
import com.eshore.khala.admin.pojo.org.vo.OrgVO;
@Autowired
private OrgService orgService;

public void getSubOrgTree() {
    CommonResult<List<OrgVO>> result = orgService.getSubOrgTreeByOrgId(1L);
    if (result.isSuccess()) {
        List<OrgVO> orgList = result.getData();
        orgList.forEach(org -> {
            System.out.println("组织名称：" + org.getName());
        });
    }
}
```

---

#### 2.3.2 根据组织架构ID查询下级组织架构ID集合

**接口地址：** `GET /org/get-sub-org-ids-by-orgid`

**参数说明：** 

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| orgId | Long | 是 | 组织架构ID |

**返回数据：** `List<Long>` (下级组织架构ID集合)

**Feign调用示例：**
```java
@Autowired
private OrgService orgService;

public void getSubOrgIds() {
    CommonResult<List<Long>> result = orgService.getSubOrgIdsByOrgId(1L);
    if (result.isSuccess()) {
        List<Long> orgIds = result.getData();
        System.out.println("下级组织数量：" + orgIds.size());
    }
}
```

---

#### 2.3.3 根据组织架构ID集合查询下级组织架构ID集合

**接口地址：** `GET /org/get-sub-org-ids-by-orgids`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| orgIds | Collection<Long> | 是 | 组织架构ID集合 |

**返回数据：** `List<Long>` (所有下级组织架构ID集合)

**Feign调用示例：**
```java
@Autowired
private OrgService orgService;

public void getSubOrgIdsByBatch() {
    List<Long> orgIds = Arrays.asList(1L, 2L, 3L);
    CommonResult<List<Long>> result = orgService.getSubOrgIdsByOrgIds(orgIds);
    if (result.isSuccess()) {
        List<Long> subOrgIds = result.getData();
        System.out.println("所有下级组织数量：" + subOrgIds.size());
    }
}
```

---

### 2.4 权限服务 (PermissionService)

**接口路径：** `@FeignClient(name = "admin-center", path = "permission")`

**方法速查：**

| 方法 | 接口 | 返回 |
|------|------|------|
| `getOrgsByUserId(Long)` | GET `/permission/get-orgs-by-userid` | `Set<SysOrg>` |
| `getOrgIdsByUserId(Long)` | GET `/permission/get-orgids-by-userid` | `Set<Long>` |
| `getUserIdsByOrgId(Long)` | GET `/permission/get-userids-by-orgid` | `Set<Long>` |
| `getRolesByUserId(Long)` | GET `/permission/get-roles-by-userid` | `List<SysRole>` |

#### 2.4.1 获取用户拥有的组织架构集合

**接口地址：** `GET /permission/get-orgs-by-userid`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | Long | 是 | 用户ID |

**返回数据：** `Set<SysOrg>` (组织架构集合)

**SysOrg 结构说明：**

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | Long | 主键id |
| tenantId | Long | 租户id |
| parentId | Long | 父id |
| code | String | 组织架构编码 |
| name | String | 组织架构名称 |
| sort | Integer | 显示顺序 |
| leaderUserId | Long | 组织架构领导者用户id |
| mobile | String | 组织架构联系电话 |
| email | String | email |
| status | Integer | 状态 |
| createTime | LocalDateTime | 创建时间 |
| updateTime | LocalDateTime | 更新时间 |

**Feign调用示例：**
```java
import com.eshore.khala.entity.org.SysOrg;
@Autowired
private PermissionService permissionService;

public void getUserOrgs() {
    CommonResult<Set<SysOrg>> result = permissionService.getOrgsByUserId(1L);
    if (result.isSuccess()) {
        Set<SysOrg> orgs = result.getData();
        orgs.forEach(org -> {
            System.out.println("组织名称：" + org.getName());
        });
    }
}
```

---

#### 2.4.2 获取用户拥有的组织架构编号集合

**接口地址：** `GET /permission/get-orgids-by-userid`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | Long | 是 | 用户ID |

**返回数据：** `Set<Long>` (组织架构编号集合)

**Feign调用示例：**
```java
@Autowired
private PermissionService permissionService;

public void getUserOrgIds() {
    CommonResult<Set<Long>> result = permissionService.getOrgIdsByUserId(1L);
    if (result.isSuccess()) {
        Set<Long> orgIds = result.getData();
        System.out.println("用户组织数量：" + orgIds.size());
    }
}
```

---

#### 2.4.3 获取组织架构拥有的用户编号集合

**接口地址：** `GET /permission/get-userids-by-orgid`

**参数说明：**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| orgId | Long | 是 | 组织架构ID |

**返回数据：** `Set<Long>` (用户编号集合)

**Feign调用示例：**
```java
@Autowired
private PermissionService permissionService;

public void getOrgUserIds() {
    CommonResult<Set<Long>> result = permissionService.getUserIdsByOrgId(1L);
    if (result.isSuccess()) {
        Set<Long> userIds = result.getData();
        System.out.println("组织用户数量：" + userIds.size());
    }
}
```

---

#### 2.4.4 根据用户ID查询用户角色

**接口地址：** `GET /permission/get-roles-by-userid`

**参数说明：** 

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | Long | 是 | 用户ID |

**返回数据：** `List<SysRole>` (角色列表)

**SysRole 结构说明：**

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | Long | 角色id |
| tenantId | Long | 租户id |
| code | String | 角色编码 |
| name | String | 角色名称 |
| status | Integer | 状态(0正常 1停用) |
| persist | Boolean | 是否保留数据 |
| sort | Integer | 排序 |
| createTime | LocalDateTime | 创建时间 |
| updateTime | LocalDateTime | 更新时间 |

**Feign调用示例：**
```java
import com.eshore.khala.entity.role.SysRole;
@Autowired
private PermissionService permissionService;

public void getUserRoles() {
    CommonResult<List<SysRole>> result = permissionService.findRolesByUserId(1L);
    if (result.isSuccess()) {
        List<SysRole> roles = result.getData();
        roles.forEach(role -> {
            System.out.println("角色名称：" + role.getName());
        });
    }
}
```

---


## 3. Feign调用方式

### 3.1 添加依赖

**依赖**：`khala-admin-api`（已在项目 pom 中引入）

在项目中添加 Khala Admin API 依赖：

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-admin-api</artifactId>
    <version>${khala.version}</version>
</dependency>
```

### 3.2 启用Feign客户端

在启动类上添加 `@EnableFeignClients` 注解：

```java
@SpringBootApplication
@EnableFeignClients(basePackages = "com.eshore.khala.admin.api")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 3.3 注入服务使用

> **注意**：注入 Feign 客户端使用 `@Resource`，禁止 `@Autowired`

```java
@Service
public class UserServiceImpl {

    @Autowired
    private UserService userService;

    @Autowired
    private OrgService orgService;

    @Autowired
    private PermissionService permissionService;

    public UserInfoDTO getUserInfo(Long userId) {
        // 查询用户基本信息
        CommonResult<SysUser> userResult = userService.findUserById(userId);
        if (!userResult.isSuccess()) {
            throw new RuntimeException("获取用户信息失败");
        }
        SysUser user = userResult.getData();

        // 查询用户角色
        CommonResult<List<SysRole>> roleResult = permissionService.findRolesByUserId(userId);
        List<SysRole> roles = roleResult.isSuccess() ? roleResult.getData() : Collections.emptyList();

        // 查询用户组织
        CommonResult<Set<SysOrg>> orgResult = permissionService.getOrgsByUserId(userId);
        Set<SysOrg> orgs = orgResult.isSuccess() ? orgResult.getData() : Collections.emptySet();

        // 组装返回对象
        UserInfoDTO dto = new UserInfoDTO();
        dto.setUserId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setRealName(user.getRealName());
        dto.setRoles(roles);
        dto.setOrgs(orgs);

        return dto;
    }
}
```
---

## 4. 登录用户/租户信息

### 4.1 获取当前登录用户信息

**依赖**：`khala-auth-client-spring-boot-starter`（已在项目 pom 中引入）

**简单获取用户 ID / 用户名**：

```java
import com.eshore.khala.starter.auth.util.LoginUserUtils;

Long userId = LoginUserUtils.getUserId();       // 当前登录用户 ID
String username = LoginUserUtils.getUsername();  // 当前登录用户名
```

**获取完整用户上下文**：

```java
import com.eshore.khala.starter.auth.context.UserContextHolder;
import com.eshore.khala.starter.auth.model.LoginAppUser;
import com.eshore.khala.starter.auth.model.LoginAuthority;

LoginAppUser user = UserContextHolder.getUser();
// 用户id
Long currentUserId = user.getCurrentUserId();
// 用户名称
String name = user.getName();
// 角色
Collection<LoginAuthority> authorities = user.getAuthorities();
// 组织
Set<Long> orgIds = user.getOrgIds();
// 角色code
Set<String> roleCodes = user.getRoleCodes();
// 角色id
Set<Long> roleIds = user.getRoleIds();
```

### 4.2 获取当前租户
```java
import com.eshore.khala.starter.tenant.core.context.TenantContextHolder;
Long tenantId = TenantContextHolder.getTenantIdLong();
```

---

## 5. 业务关联用户/角色/组织

| 场景 | 做法 |
|------|------|
| 记录操作人 | `LoginUserUtils.getUserId()` 存入 `createBy`/`updateBy` |
| 查询操作人姓名 | 存 userId，展示时通过 `UserService.findUserById()` Feign 获取 |
| 关联组织 | 存 orgId，通过 `OrgService` 获取组织树 |
| 关联角色 | 存 roleId，通过 `PermissionService.getRolesByUserId()` 获取 |
| 关联租户 | 实体已有 `tenantId` 字段，通过 `TenantContextHolder.getTenantIdLong()` 获取 |

> **注意**：如果业务表与系统表在**同一数据库**中，可以直接通过 SQL JOIN 关联 `khala_sys_user` 等系统表查询，无需 Feign 调用。只有不同数据库时才需要通过 Feign 获取。

---

## 6. 快速参考

| 需求 | 方式 |
|------|------|
| 当前用户 ID | `LoginUserUtils.getUserId()` |
| 当前用户名 | `LoginUserUtils.getUsername()` |
| 当前租户 ID | `TenantContextHolder.getTenantIdLong()` |
| 查用户详情 | `UserService.findUserById()` |
| 查用户组织 | `PermissionService.getOrgsByUserId()` |
| 查用户角色 | `PermissionService.getRolesByUserId()` |
| 查组织树 | `OrgService.getSubOrgTreeByOrgId()` |

---

## 附录

### A. 服务名称常量

```java
public interface ServiceNameConstants {
    String ADMIN_SERVICE = "admin-center";
}
```
