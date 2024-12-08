import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerRepositoryIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSecureSourceManagerRepositoryIamBindingArgs {
  members: string[];
  repository_id: string;
  role: string;
  condition?: GoogleSecureSourceManagerRepositoryIamBindingArgsCondition;
}

export class google_secure_source_manager_repository_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_repository_iam_binding", resourceName);
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

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
