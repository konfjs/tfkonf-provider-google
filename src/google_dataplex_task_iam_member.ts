import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexTaskIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexTaskIamMemberArgs {
  lake: string;
  member: string;
  role: string;
  task_id: string;
  condition?: GoogleDataplexTaskIamMemberArgsCondition;
}

export class google_dataplex_task_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataplexTaskIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataplex_task_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get lake(): string {
    return `${this.resourceType}.${this.resourceName}.lake`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get task_id(): string {
    return `${this.resourceType}.${this.resourceName}.task_id`;
  }
}
