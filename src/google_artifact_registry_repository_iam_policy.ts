import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleArtifactRegistryRepositoryIamPolicyArgs {
  policy_data: string;
  repository: string;
}

export class google_artifact_registry_repository_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleArtifactRegistryRepositoryIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_artifact_registry_repository_iam_policy", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }
}
