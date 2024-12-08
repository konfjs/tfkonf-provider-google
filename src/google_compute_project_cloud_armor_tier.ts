import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeProjectCloudArmorTierArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeProjectCloudArmorTierArgs {
  cloud_armor_tier: string;
  timeouts?: GoogleComputeProjectCloudArmorTierArgsTimeouts;
}

export class google_compute_project_cloud_armor_tier extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeProjectCloudArmorTierArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_project_cloud_armor_tier", resourceName);
  }

  get cloud_armor_tier(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_armor_tier`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
