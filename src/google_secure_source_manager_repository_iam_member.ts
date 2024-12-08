import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerRepositoryIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecureSourceManagerRepositoryIamMemberArgs {
  member: string;
  repository_id: string;
  role: string;
  condition?: GoogleSecureSourceManagerRepositoryIamMemberArgsCondition;
}

export class google_secure_source_manager_repository_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecureSourceManagerRepositoryIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_repository_iam_member", resourceName);
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

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
