import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageObjectAclArgs {
  bucket: string;
  object: string;
  predefined_acl?: string;
}

export class google_storage_object_acl extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageObjectAclArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_storage_object_acl", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get object(): string {
    return `${this.resourceType}.${this.resourceName}.object`;
  }

  get role_entity(): string {
    return `${this.resourceType}.${this.resourceName}.role_entity`;
  }
}
