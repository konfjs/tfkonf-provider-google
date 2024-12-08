import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFilestoreSnapshotArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFilestoreSnapshotArgs {
  description?: string;
  instance: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  timeouts?: GoogleFilestoreSnapshotArgsTimeouts;
}

export class google_filestore_snapshot extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFilestoreSnapshotArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_filestore_snapshot", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get filesystem_used_bytes(): string {
    return `${this.resourceType}.${this.resourceName}.filesystem_used_bytes`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
