import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingLogViewIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleLoggingLogViewIamMemberArgs {
  bucket: string;
  member: string;
  name: string;
  parent: string;
  role: string;
  condition?: GoogleLoggingLogViewIamMemberArgsCondition;
}

export class google_logging_log_view_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_log_view_iam_member", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
