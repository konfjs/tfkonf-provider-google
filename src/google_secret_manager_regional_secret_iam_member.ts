import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecretManagerRegionalSecretIamMemberArgs {
  member: string;
  role: string;
  secret_id: string;
  condition?: GoogleSecretManagerRegionalSecretIamMemberArgsCondition;
}

export class google_secret_manager_regional_secret_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecretManagerRegionalSecretIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_regional_secret_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
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
