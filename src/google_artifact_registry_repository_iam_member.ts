import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleArtifactRegistryRepositoryIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleArtifactRegistryRepositoryIamMemberArgs {
  member: string;
  repository: string;
  role: string;
  condition?: GoogleArtifactRegistryRepositoryIamMemberArgsCondition;
}

export class google_artifact_registry_repository_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleArtifactRegistryRepositoryIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_artifact_registry_repository_iam_member", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
