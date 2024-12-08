import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleArtifactRegistryRepositoryIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleArtifactRegistryRepositoryIamBindingArgs {
  members: string[];
  repository: string;
  role: string;
  condition?: GoogleArtifactRegistryRepositoryIamBindingArgsCondition;
}

export class google_artifact_registry_repository_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleArtifactRegistryRepositoryIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_artifact_registry_repository_iam_binding", resourceName);
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

  get repository(): string {
    return `${this.resourceType}.${this.resourceName}.repository`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
