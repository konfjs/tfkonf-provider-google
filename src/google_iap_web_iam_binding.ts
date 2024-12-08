import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebIamBindingArgs {
  members: string[];
  role: string;
  condition?: GoogleIapWebIamBindingArgsCondition;
}

export class google_iap_web_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapWebIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_iam_binding", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
