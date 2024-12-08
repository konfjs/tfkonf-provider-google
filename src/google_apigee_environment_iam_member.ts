import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleApigeeEnvironmentIamMemberArgs {
  env_id: string;
  member: string;
  org_id: string;
  role: string;
  condition?: GoogleApigeeEnvironmentIamMemberArgsCondition;
}

export class google_apigee_environment_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeEnvironmentIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment_iam_member", resourceName);
  }

  get env_id(): string {
    return `${this.resourceType}.${this.resourceName}.env_id`;
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
