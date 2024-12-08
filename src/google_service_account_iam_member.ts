import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceAccountIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleServiceAccountIamMemberArgs {
  member: string;
  role: string;
  service_account_id: string;
  condition?: GoogleServiceAccountIamMemberArgsCondition;
}

export class google_service_account_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleServiceAccountIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_account_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }
}
