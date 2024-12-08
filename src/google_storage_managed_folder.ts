import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageManagedFolderArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageManagedFolderArgs {
  bucket: string;
  force_destroy?: boolean;
  name: string;
  timeouts?: GoogleStorageManagedFolderArgsTimeouts;
}

export class google_storage_managed_folder extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_managed_folder", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get metageneration(): string {
    return `${this.resourceType}.${this.resourceName}.metageneration`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
