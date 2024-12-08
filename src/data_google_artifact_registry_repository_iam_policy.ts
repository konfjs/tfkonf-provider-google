import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleArtifactRegistryRepositoryIamPolicyArgs {
  repository: string;
}

export class data_google_artifact_registry_repository_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleArtifactRegistryRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_artifact_registry_repository_iam_policy", resourceName);
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

  get repository(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository`;
  }
}
