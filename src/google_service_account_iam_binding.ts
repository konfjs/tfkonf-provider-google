import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleServiceAccountIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleServiceAccountIamBindingArgs {
  members: string[];
  role: string;
  service_account_id: string;
  condition?: GoogleServiceAccountIamBindingArgsCondition;
}

export class google_service_account_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleServiceAccountIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_service_account_iam_binding", resourceName);
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_id`;
  }
}
