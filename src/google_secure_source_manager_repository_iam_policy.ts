import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerRepositoryIamPolicyArgs {
  policy_data: string;
  repository_id: string;
}

export class google_secure_source_manager_repository_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_repository_iam_policy", resourceName);
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }
}
