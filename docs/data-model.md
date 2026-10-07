# StudyCircle Data Model

## Overview

StudyCircle uses three core entities to manage users, study groups, and group membership.

## 1. User

The `User` entity represents a student who uses StudyCircle.

### Fields

| Field | Type | Description |
|---|---|---|
| id | String | Unique user identifier |
| name | String | User's display name |
| email | String | User's unique email address |
| createdAt | DateTime | Date the account was created |

## 2. StudyGroup

The `StudyGroup` entity represents a study group created by a student.

### Fields

| Field | Type | Description |
|---|---|---|
| id | String | Unique study group identifier |
| name | String | Name of the study group |
| course | String | Course associated with the group |
| description | String | Description of the group |
| meetingPreference | String | Preferred meeting information |
| creatorId | String | ID of the user who created the group |
| createdAt | DateTime | Date the group was created |
| updatedAt | DateTime | Date the group was last updated |

## 3. Membership

The `Membership` entity connects users with study groups.

### Fields

| Field | Type | Description |
|---|---|---|
| id | String | Unique membership identifier |
| userId | String | ID of the member |
| groupId | String | ID of the study group |
| joinedAt | DateTime | Date the user joined the group |

## Relationships

### User → StudyGroup

One user can create many study groups.

**Relationship:** One-to-Many

```text
User 1 ──────────── * StudyGroup
```

The `StudyGroup.creatorId` field references `User.id`.

### User → Membership

One user can have many memberships.

**Relationship:** One-to-Many

```text
User 1 ──────────── * Membership
```

The `Membership.userId` field references `User.id`.

### StudyGroup → Membership

One study group can have many memberships.

**Relationship:** One-to-Many

```text
StudyGroup 1 ────── * Membership
```

The `Membership.groupId` field references `StudyGroup.id`.

### Overall Relationship

```text
                 creates
User 1 ───────────────────────── * StudyGroup
 │                                   │
 │                                   │
 │ has                               │ has
 │                                   │
 └────────────── * Membership * ─────┘
```

Membership acts as the join entity that allows many users to belong to many study groups.

## Database

The planned database is **PostgreSQL**.

The planned ORM is **Prisma**.

The database implementation will be completed during feature development.