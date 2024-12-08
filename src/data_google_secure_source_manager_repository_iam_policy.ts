import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSecureSourceManagerRepositoryIamPolicyArgs {
  repository_id: string;
}

export class data_google_secure_source_manager_repository_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleSecureSourceManagerRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_secure_source_manager_repository_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get repository_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_id`;
  }
}
