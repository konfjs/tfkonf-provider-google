import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerSecretIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecretManagerSecretIamBindingArgs {
  members: string[];
  role: string;
  secret_id: string;
  condition?: GoogleSecretManagerSecretIamBindingArgsCondition;
}

export class google_secret_manager_secret_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_secret_iam_binding", resourceName);
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

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }
}
