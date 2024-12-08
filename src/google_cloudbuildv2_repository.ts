import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildv2RepositoryArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleCloudbuildv2RepositoryArgs {
  annotations?: { [key: string]: string };
  name: string;
  parent_connection: string;
  remote_uri: string;
  timeouts?: GoogleCloudbuildv2RepositoryArgsTimeouts;
}

export class google_cloudbuildv2_repository extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudbuildv2RepositoryArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudbuildv2_repository", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent_connection(): string {
    return `${this.resourceType}.${this.resourceName}.parent_connection`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get remote_uri(): string {
    return `${this.resourceType}.${this.resourceName}.remote_uri`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
