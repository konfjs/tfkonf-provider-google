import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingLogViewIamPolicyArgs {
  bucket: string;
  name: string;
  parent: string;
  policy_data: string;
}

export class google_logging_log_view_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleLoggingLogViewIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_logging_log_view_iam_policy", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
