import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleLoggingLogViewIamPolicyArgs {
  bucket: string;
  name: string;
  parent: string;
}

export class data_google_logging_log_view_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleLoggingLogViewIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_logging_log_view_iam_policy", resourceName);
  }

  get bucket(): string {
    return `data.${this.resourceType}.${this.resourceName}.bucket`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
