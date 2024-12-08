import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleArtifactRegistryRepositoryArgs {
  location: string;
  project?: string;
  repository_id: string;
}

export class data_google_artifact_registry_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleArtifactRegistryRepositoryArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_artifact_registry_repository", resourceName);
  }

  get cleanup_policies(): string {
    return `data.${this.resourceType}.${this.resourceName}.cleanup_policies`;
  }

  get cleanup_policy_dry_run(): string {
    return `data.${this.resourceType}.${this.resourceName}.cleanup_policy_dry_run`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get docker_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.docker_config`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get format(): string {
    return `data.${this.resourceType}.${this.resourceName}.format`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get kms_key_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.kms_key_name`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get maven_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.maven_config`;
  }

  get mode(): string {
    return `data.${this.resourceType}.${this.resourceName}.mode`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get remote_repository_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.remote_repository_config`;
  }

  get repository_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }

  get virtual_repository_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.virtual_repository_config`;
  }
}
