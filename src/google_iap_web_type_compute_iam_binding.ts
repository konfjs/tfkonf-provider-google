import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeComputeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebTypeComputeIamBindingArgs {
  members: string[];
  role: string;
  condition?: GoogleIapWebTypeComputeIamBindingArgsCondition;
}

export class google_iap_web_type_compute_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapWebTypeComputeIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_type_compute_iam_binding", resourceName);
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
