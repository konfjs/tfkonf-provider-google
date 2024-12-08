import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudIdentityGroupArgsGroupKey {
  id: string;
  namespace?: string;
}

export interface GoogleCloudIdentityGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudIdentityGroupArgs {
  description?: string;
  display_name?: string;
  initial_group_config?: string;
  labels: { [key: string]: string };
  parent: string;
  group_key: GoogleCloudIdentityGroupArgsGroupKey;
  timeouts?: GoogleCloudIdentityGroupArgsTimeouts;
}

export class google_cloud_identity_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudIdentityGroupArgs) {
    const meta = {group_key:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_identity_group", resourceName);
  }

  get additional_group_keys(): string {
    return `${this.resourceType}.${this.resourceName}.additional_group_keys`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
