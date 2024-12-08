import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageDefaultObjectAccessControlArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageDefaultObjectAccessControlArgs {
  bucket: string;
  entity: string;
  object?: string;
  role: string;
  timeouts?: GoogleStorageDefaultObjectAccessControlArgsTimeouts;
}

export class google_storage_default_object_access_control extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageDefaultObjectAccessControlArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_default_object_access_control", resourceName);
  }

  get bucket(): string {
    return `${this.resourceType}.${this.resourceName}.bucket`;
  }

  get domain(): string {
    return `${this.resourceType}.${this.resourceName}.domain`;
  }

  get email(): string {
    return `${this.resourceType}.${this.resourceName}.email`;
  }

  get entity(): string {
    return `${this.resourceType}.${this.resourceName}.entity`;
  }

  get entity_id(): string {
    return `${this.resourceType}.${this.resourceName}.entity_id`;
  }

  get generation(): string {
    return `${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project_team(): string {
    return `${this.resourceType}.${this.resourceName}.project_team`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
