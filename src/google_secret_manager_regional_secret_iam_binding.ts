import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecretManagerRegionalSecretIamBindingArgs {
  members: string[];
  role: string;
  secret_id: string;
  condition?: GoogleSecretManagerRegionalSecretIamBindingArgsCondition;
}

export class google_secret_manager_regional_secret_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_regional_secret_iam_binding", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
