import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvironmentIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleApigeeEnvironmentIamBindingArgs {
  env_id: string;
  members: string[];
  org_id: string;
  role: string;
  condition?: GoogleApigeeEnvironmentIamBindingArgsCondition;
}

export class google_apigee_environment_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEnvironmentIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_environment_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
