import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecureSourceManagerRepositoryArgsInitialConfig {
  default_branch?: string;
  gitignores?: string[];
  license?: string;
  readme?: string;
}

export interface GoogleSecureSourceManagerRepositoryArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleSecureSourceManagerRepositoryArgs {
  description?: string;
  instance: string;
  location: string;
  repository_id: string;
  initial_config?: GoogleSecureSourceManagerRepositoryArgsInitialConfig;
  timeouts?: GoogleSecureSourceManagerRepositoryArgsTimeouts;
}

export class google_secure_source_manager_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecureSourceManagerRepositoryArgs) {
    const meta = {initial_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secure_source_manager_repository", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance(): string {
    return `${this.resourceType}.${this.resourceName}.instance`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get repository_id(): string {
    return `${this.resourceType}.${this.resourceName}.repository_id`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get uris(): string {
    return `${this.resourceType}.${this.resourceName}.uris`;
  }
}
