import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleLoggingLogViewIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleLoggingLogViewIamBindingArgs {
  bucket: string;
  members: string[];
  name: string;
  parent: string;
  role: string;
  condition?: GoogleLoggingLogViewIamBindingArgsCondition;
}

export class google_logging_log_view_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleLoggingLogViewIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_logging_log_view_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
