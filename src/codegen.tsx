export type Maybe<T> = T | null;

/** Ordering options for repository connections */
export interface RepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: RepositoryOrderField;
}
/** Ways in which star connections can be ordered. */
export interface StarOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: StarOrderField;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface IssueOrder {
  /** The direction in which to order issues by the specified field. */
  direction: OrderDirection;
  /** The field in which to order issues by. */
  field: IssueOrderField;
}
/** Ways in which lists of reactions can be ordered upon return. */
export interface ReactionOrder {
  /** The direction in which to order reactions by the specified field. */
  direction: OrderDirection;
  /** The field in which to order reactions by. */
  field: ReactionOrderField;
}
/** Specifies an author for filtering Git commits. */
export interface CommitAuthor {
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<string[]>;
  /** ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails. */
  id?: Maybe<string>;
}
/** Ways in which team connections can be ordered. */
export interface TeamOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: TeamOrderField;
}
/** Ordering options for team member connections */
export interface TeamMemberOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order team members by. */
  field: TeamMemberOrderField;
}
/** Ordering options for team repository connections */
export interface TeamRepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: TeamRepositoryOrderField;
}
/** Ordering options for language connections. */
export interface LanguageOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order languages by. */
  field: LanguageOrderField;
}
/** Ordering options for milestone connections. */
export interface MilestoneOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order milestones by. */
  field: MilestoneOrderField;
}
/** Ways in which lists of projects can be ordered upon return. */
export interface ProjectOrder {
  /** The direction in which to order projects by the specified field. */
  direction: OrderDirection;
  /** The field in which to order projects by. */
  field: ProjectOrderField;
}
/** Ways in which lists of git refs can be ordered upon return. */
export interface RefOrder {
  /** The direction in which to order refs by the specified field. */
  direction: OrderDirection;
  /** The field in which to order refs by. */
  field: RefOrderField;
}
/** Ways in which lists of releases can be ordered upon return. */
export interface ReleaseOrder {
  /** The direction in which to order releases by the specified field. */
  direction: OrderDirection;
  /** The field in which to order releases by. */
  field: ReleaseOrderField;
}
/** Ordering options for gist connections */
export interface GistOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: GistOrderField;
}
/** Autogenerated input type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the suggested topic. */
  name: string;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of AddComment */
export interface AddCommentInput {
  /** The contents of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of AddProjectCard */
export interface AddProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<string>;
  /** The note on the card. */
  note?: Maybe<string>;
  /** The Node ID of the ProjectColumn. */
  projectColumnId: string;
}
/** Autogenerated input type of AddProjectColumn */
export interface AddProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the column. */
  name: string;
  /** The Node ID of the project. */
  projectId: string;
}
/** Autogenerated input type of AddPullRequestReview */
export interface AddPullRequestReviewInput {
  /** The contents of the review body comment. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The review line comments. */
  comments?: Maybe<(Maybe<DraftPullRequestReviewComment>)[]>;
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<GitObjectId>;
  /** The event to perform on the pull request review. */
  event?: Maybe<PullRequestReviewEvent>;
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
}
/** Specifies a review comment to be left with a Pull Request Review. */
export interface DraftPullRequestReviewComment {
  /** Body of the comment to leave. */
  body: string;
  /** Path to the file being commented on. */
  path: string;
  /** Position in the file to leave a comment on. */
  position: number;
}
/** Autogenerated input type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<GitObjectId>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<string>;
  /** The relative path of the file to comment on. */
  path?: Maybe<string>;
  /** The line index in the diff to comment on. */
  position?: Maybe<number>;
  /** The Node ID of the review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of AddReaction */
export interface AddReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the emoji to react with. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of AddStar */
export interface AddStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Starrable ID to star. */
  starrableId: string;
}
/** Autogenerated input type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRuleInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** The glob-like pattern used to determine matching branches. */
  pattern: string;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: string;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
}
/** Autogenerated input type of CreateProject */
export interface CreateProjectInput {
  /** The description of project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project. */
  name: string;
  /** The owner ID to create the project under. */
  ownerId: string;
}
/** Autogenerated input type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the suggested topic. */
  name: string;
  /** The reason why the suggested topic is declined. */
  reason: TopicSuggestionDeclineReason;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProject */
export interface DeleteProjectInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Project ID to update. */
  projectId: string;
}
/** Autogenerated input type of DeleteProjectCard */
export interface DeleteProjectCardInput {
  /** The id of the card to delete. */
  cardId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProjectColumn */
export interface DeleteProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to delete. */
  columnId: string;
}
/** Autogenerated input type of DeletePullRequestReview */
export interface DeletePullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of DismissPullRequestReview */
export interface DismissPullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The contents of the pull request review dismissal message. */
  message: string;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of LockLockable */
export interface LockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<LockReason>;
  /** ID of the issue or pull request to be locked. */
  lockableId: string;
}
/** Autogenerated input type of MoveProjectCard */
export interface MoveProjectCardInput {
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<string>;
  /** The id of the card to move. */
  cardId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to move it into. */
  columnId: string;
}
/** Autogenerated input type of MoveProjectColumn */
export interface MoveProjectColumnInput {
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to move. */
  columnId: string;
}
/** Autogenerated input type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: string;
  /** The ID of the outside collaborator to remove. */
  userId: string;
}
/** Autogenerated input type of RemoveReaction */
export interface RemoveReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the emoji reaction to remove. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of RemoveStar */
export interface RemoveStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Starrable ID to unstar. */
  starrableId: string;
}
/** Autogenerated input type of RequestReviews */
export interface RequestReviewsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<string[]>;
  /** Add users to the set rather than replace. */
  union?: Maybe<boolean>;
  /** The Node IDs of the user to request. */
  userIds?: Maybe<string[]>;
}
/** Autogenerated input type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewInput {
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The event to send to the Pull Request Review. */
  event: PullRequestReviewEvent;
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of UnlockLockable */
export interface UnlockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the issue or pull request to be unlocked. */
  lockableId: string;
}
/** Autogenerated input type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<string>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
}
/** Autogenerated input type of UpdateProject */
export interface UpdateProjectInput {
  /** The description of project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project. */
  name?: Maybe<string>;
  /** The Project ID to update. */
  projectId: string;
  /** Whether the project is public or not. */
  public?: Maybe<boolean>;
  /** Whether the project is open or closed. */
  state?: Maybe<ProjectState>;
}
/** Autogenerated input type of UpdateProjectCard */
export interface UpdateProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<boolean>;
  /** The note of ProjectCard. */
  note?: Maybe<string>;
  /** The ProjectCard ID to update. */
  projectCardId: string;
}
/** Autogenerated input type of UpdateProjectColumn */
export interface UpdateProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project column. */
  name: string;
  /** The ProjectColumn ID to update. */
  projectColumnId: string;
}
/** Autogenerated input type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewInput {
  /** The contents of the pull request review body. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: string;
}
/** Autogenerated input type of UpdateSubscription */
export interface UpdateSubscriptionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The new state of the subscription. */
  state: SubscriptionState;
  /** The Node ID of the subscribable object to modify. */
  subscribableId: string;
}
/** Autogenerated input type of UpdateTopics */
export interface UpdateTopicsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the repository. */
  repositoryId: string;
  /** An array of topic names. */
  topicNames: string[];
}
/** Autogenerated input type of CreateContentAttachment */
export interface CreateContentAttachmentInput {
  /** The body of the content attachment, which may contain markdown. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The node ID of the content_reference. */
  contentReferenceId: string;
  /** The title of the content attachment. */
  title: string;
}
/** Autogenerated input type of DeleteIssue */
export interface DeleteIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to delete. */
  issueId: string;
}
/** Autogenerated input type of MinimizeComment */
export interface MinimizeCommentInput {
  /** The classification of comment */
  classifier: ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of PinIssue */
export interface PinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to be pinned */
  issueId: string;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface PullRequestOrder {
  /** The direction in which to order pull requests by the specified field. */
  direction: OrderDirection;
  /** The field in which to order pull requests by. */
  field: PullRequestOrderField;
}
/** Autogenerated input type of ResolveReviewThread */
export interface ResolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the thread to resolve */
  threadId: string;
}
/** Autogenerated input type of UnminimizeComment */
export interface UnminimizeCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of UnpinIssue */
export interface UnpinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to be unpinned */
  issueId: string;
}
/** Autogenerated input type of UnresolveReviewThread */
export interface UnresolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the thread to unresolve */
  threadId: string;
}
/** The possible archived states of a project card. */
export enum ProjectCardArchivedState {
  Archived = "ARCHIVED",
  NotArchived = "NOT_ARCHIVED"
}
/** The affiliation of a user to a repository */
export enum RepositoryAffiliation {
  Collaborator = "COLLABORATOR",
  OrganizationMember = "ORGANIZATION_MEMBER",
  Owner = "OWNER"
}
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = "ASC",
  Desc = "DESC"
}
/** Properties by which repository connections can be ordered. */
export enum RepositoryOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  PushedAt = "PUSHED_AT",
  Stargazers = "STARGAZERS",
  UpdatedAt = "UPDATED_AT"
}
/** The privacy of a repository */
export enum RepositoryPrivacy {
  Private = "PRIVATE",
  Public = "PUBLIC"
}
/** The possible reasons a given repository could be in a locked state. */
export enum RepositoryLockReason {
  Billing = "BILLING",
  Migrating = "MIGRATING",
  Moving = "MOVING",
  Rename = "RENAME"
}
/** Properties by which star connections can be ordered. */
export enum StarOrderField {
  StarredAt = "STARRED_AT"
}
/** The possible states of a subscription. */
export enum SubscriptionState {
  Ignored = "IGNORED",
  Subscribed = "SUBSCRIBED",
  Unsubscribed = "UNSUBSCRIBED"
}
/** Properties by which issue connections can be ordered. */
export enum IssueOrderField {
  Comments = "COMMENTS",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The possible states of a pull request. */
export enum PullRequestState {
  Closed = "CLOSED",
  Merged = "MERGED",
  Open = "OPEN"
}
/** A comment author association with repository. */
export enum CommentAuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  FirstTimer = "FIRST_TIMER",
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  Member = "MEMBER",
  None = "NONE",
  Owner = "OWNER"
}
/** The possible states of an issue. */
export enum IssueState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** The possible reasons that an issue or pull request was locked. */
export enum LockReason {
  OffTopic = "OFF_TOPIC",
  Resolved = "RESOLVED",
  Spam = "SPAM",
  TooHeated = "TOO_HEATED"
}
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum ReactionContent {
  Confused = "CONFUSED",
  Heart = "HEART",
  Hooray = "HOORAY",
  Laugh = "LAUGH",
  ThumbsDown = "THUMBS_DOWN",
  ThumbsUp = "THUMBS_UP"
}
/** A list of fields that reactions can be ordered by. */
export enum ReactionOrderField {
  CreatedAt = "CREATED_AT"
}
/** The possible errors that will prevent a user from updating a comment. */
export enum CommentCannotUpdateReason {
  Denied = "DENIED",
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  Locked = "LOCKED",
  LoginRequired = "LOGIN_REQUIRED",
  Maintenance = "MAINTENANCE",
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED"
}
/** The state of a Git signature. */
export enum GitSignatureState {
  BadCert = "BAD_CERT",
  BadEmail = "BAD_EMAIL",
  ExpiredKey = "EXPIRED_KEY",
  GpgverifyError = "GPGVERIFY_ERROR",
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  Invalid = "INVALID",
  MalformedSig = "MALFORMED_SIG",
  NotSigningKey = "NOT_SIGNING_KEY",
  NoUser = "NO_USER",
  OcspError = "OCSP_ERROR",
  OcspPending = "OCSP_PENDING",
  OcspRevoked = "OCSP_REVOKED",
  UnknownKey = "UNKNOWN_KEY",
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  Unsigned = "UNSIGNED",
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  Valid = "VALID"
}
/** The possible commit status states. */
export enum StatusState {
  Error = "ERROR",
  Expected = "EXPECTED",
  Failure = "FAILURE",
  Pending = "PENDING",
  Success = "SUCCESS"
}
/** Whether or not a PullRequest can be merged. */
export enum MergeableState {
  Conflicting = "CONFLICTING",
  Mergeable = "MERGEABLE",
  Unknown = "UNKNOWN"
}
/** The possible states of a milestone. */
export enum MilestoneState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** Properties by which team connections can be ordered. */
export enum TeamOrderField {
  Name = "NAME"
}
/** The possible organization invitation types. */
export enum OrganizationInvitationType {
  Email = "EMAIL",
  User = "USER"
}
/** The possible organization invitation roles. */
export enum OrganizationInvitationRole {
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER",
  DirectMember = "DIRECT_MEMBER",
  Reinstate = "REINSTATE"
}
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum TeamMembershipType {
  All = "ALL",
  ChildTeam = "CHILD_TEAM",
  Immediate = "IMMEDIATE"
}
/** Properties by which team member connections can be ordered. */
export enum TeamMemberOrderField {
  CreatedAt = "CREATED_AT",
  Login = "LOGIN"
}
/** The possible team member roles; either 'maintainer' or 'member'. */
export enum TeamMemberRole {
  Maintainer = "MAINTAINER",
  Member = "MEMBER"
}
/** The possible team privacy values. */
export enum TeamPrivacy {
  Secret = "SECRET",
  Visible = "VISIBLE"
}
/** Properties by which team repository connections can be ordered. */
export enum TeamRepositoryOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  Permission = "PERMISSION",
  PushedAt = "PUSHED_AT",
  Stargazers = "STARGAZERS",
  UpdatedAt = "UPDATED_AT"
}
/** The access level to a repository */
export enum RepositoryPermission {
  Admin = "ADMIN",
  Read = "READ",
  Write = "WRITE"
}
/** The possible states of a pull request review. */
export enum PullRequestReviewState {
  Approved = "APPROVED",
  ChangesRequested = "CHANGES_REQUESTED",
  Commented = "COMMENTED",
  Dismissed = "DISMISSED",
  Pending = "PENDING"
}
/** The possible states of a pull request review comment. */
export enum PullRequestReviewCommentState {
  Pending = "PENDING",
  Submitted = "SUBMITTED"
}
/** The possible states for a deployment status. */
export enum DeploymentStatusState {
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Success = "SUCCESS"
}
/** The possible states in which a deployment can be. */
export enum DeploymentState {
  Abandoned = "ABANDONED",
  Active = "ACTIVE",
  Destroyed = "DESTROYED",
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}
/** Collaborators affiliation level with a subject. */
export enum CollaboratorAffiliation {
  All = "ALL",
  Direct = "DIRECT",
  Outside = "OUTSIDE"
}
/** Properties by which language connections can be ordered. */
export enum LanguageOrderField {
  Size = "SIZE"
}
/** Properties by which milestone connections can be ordered. */
export enum MilestoneOrderField {
  CreatedAt = "CREATED_AT",
  DueDate = "DUE_DATE",
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT"
}
/** Properties by which project connections can be ordered. */
export enum ProjectOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  UpdatedAt = "UPDATED_AT"
}
/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** Properties by which ref connections can be ordered. */
export enum RefOrderField {
  Alphabetical = "ALPHABETICAL",
  TagCommitDate = "TAG_COMMIT_DATE"
}
/** Properties by which release connections can be ordered. */
export enum ReleaseOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME"
}
/** Properties by which gist connections can be ordered. */
export enum GistOrderField {
  CreatedAt = "CREATED_AT",
  PushedAt = "PUSHED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The privacy of a Gist */
export enum GistPrivacy {
  All = "ALL",
  Public = "PUBLIC",
  Secret = "SECRET"
}
/** The reason a repository is listed as 'contributed'. */
export enum RepositoryContributionType {
  Commit = "COMMIT",
  Issue = "ISSUE",
  PullRequest = "PULL_REQUEST",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  Repository = "REPOSITORY"
}
/** Various content states of a ProjectCard */
export enum ProjectCardState {
  ContentOnly = "CONTENT_ONLY",
  NoteOnly = "NOTE_ONLY",
  Redacted = "REDACTED"
}
/** The semantic purpose of the column - todo, in progress, or done. */
export enum ProjectColumnPurpose {
  Done = "DONE",
  InProgress = "IN_PROGRESS",
  Todo = "TODO"
}
/** The possible roles within an organization for its members. */
export enum OrganizationMemberRole {
  Admin = "ADMIN",
  Member = "MEMBER"
}
/** The role of a user on a team. */
export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER"
}
/** Represents the individual results of a search. */
export enum SearchType {
  Issue = "ISSUE",
  Repository = "REPOSITORY",
  User = "USER"
}
/** The possible events to perform on a pull request review. */
export enum PullRequestReviewEvent {
  Approve = "APPROVE",
  Comment = "COMMENT",
  Dismiss = "DISMISS",
  RequestChanges = "REQUEST_CHANGES"
}
/** Reason that the suggested topic is declined. */
export enum TopicSuggestionDeclineReason {
  NotRelevant = "NOT_RELEVANT",
  PersonalPreference = "PERSONAL_PREFERENCE",
  TooGeneral = "TOO_GENERAL",
  TooSpecific = "TOO_SPECIFIC"
}
/** The possible default permissions for repositories. */
export enum DefaultRepositoryPermissionField {
  Admin = "ADMIN",
  None = "NONE",
  Read = "READ",
  Write = "WRITE"
}
/** The possible PubSub channels for an issue. */
export enum IssuePubSubTopic {
  Markasread = "MARKASREAD",
  State = "STATE",
  Timeline = "TIMELINE",
  Updated = "UPDATED"
}
/** The possible item types found in a timeline. */
export enum IssueTimelineItemsItemType {
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  IssueComment = "ISSUE_COMMENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** The reasons a piece of content can be reported or minimized. */
export enum ReportedContentClassifiers {
  Abuse = "ABUSE",
  OffTopic = "OFF_TOPIC",
  Outdated = "OUTDATED",
  Resolved = "RESOLVED",
  Spam = "SPAM"
}
/** Properties by which pull_requests connections can be ordered. */
export enum PullRequestOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The possible PubSub channels for a pull request. */
export enum PullRequestPubSubTopic {
  HeadRef = "HEAD_REF",
  Markasread = "MARKASREAD",
  State = "STATE",
  Timeline = "TIMELINE",
  Updated = "UPDATED"
}
/** The possible item types found in a timeline. */
export enum PullRequestTimelineItemsItemType {
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  DeployedEvent = "DEPLOYED_EVENT",
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  IssueComment = "ISSUE_COMMENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MergedEvent = "MERGED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** The affiliation type between collaborator and repository. */
export enum RepositoryCollaboratorAffiliation {
  All = "ALL",
  Outside = "OUTSIDE"
}

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
export type Uri = any;

/** An ISO-8601 encoded UTC date string. */
export type DateTime = any;

/** A string containing HTML code. */
export type Html = any;

/** A Git object ID. */
export type GitObjectId = any;

/** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
export type GitTimestamp = any;

/** Git SSH string */
export type GitSshRemote = any;

/** An ISO-8601 encoded date string. */
export type Date = any;

/** A valid x509 certificate string */
export type X509Certificate = any;

// ====================================================
// Documents
// ====================================================

export type OrganizationByNameVariables = {
  login: string;
};

export type OrganizationByNameQuery = {
  __typename?: "Query";

  organization: Maybe<OrganizationByNameOrganization>;
};

export type OrganizationByNameOrganization = {
  __typename?: "Organization";

  id: string;

  avatarUrl: Uri;

  login: string;

  repositories: OrganizationByNameRepositories;
};

export type OrganizationByNameRepositories = {
  __typename?: "RepositoryConnection";

  nodes: Maybe<(Maybe<OrganizationByNameNodes>)[]>;
};

export type OrganizationByNameNodes = {
  __typename?: "Repository";

  id: string;

  name: string;

  stargazers: OrganizationByNameStargazers;
};

export type OrganizationByNameStargazers = {
  __typename?: "StargazerConnection";

  totalCount: number;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export const OrganizationByNameDocument = gql`
  query OrganizationByName($login: String!) {
    organization(login: $login) {
      id
      avatarUrl
      login
      repositories(first: 10) {
        nodes {
          id
          name
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
export class OrganizationByNameComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<OrganizationByNameQuery, OrganizationByNameVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<OrganizationByNameQuery, OrganizationByNameVariables>
        query={OrganizationByNameDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type OrganizationByNameProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<OrganizationByNameQuery, OrganizationByNameVariables>
> &
  TChildProps;
export function OrganizationByNameHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        OrganizationByNameQuery,
        OrganizationByNameVariables,
        OrganizationByNameProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    OrganizationByNameQuery,
    OrganizationByNameVariables,
    OrganizationByNameProps<TChildProps>
  >(OrganizationByNameDocument, operationOptions);
}