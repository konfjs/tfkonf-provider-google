import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeResourcePolicyArgs {
  name: string;
  project?: string;
  region?: string;
}

export class data_google_compute_resource_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeResourcePolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_resource_policy", resourceName);
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get disk_consistency_group_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.disk_consistency_group_policy`;
  }

  get group_placement_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.group_placement_policy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_schedule_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.instance_schedule_policy`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get self_link(): string {
    return `data.${this.resourceType}.${this.resourceName}.self_link`;
  }

  get snapshot_schedule_policy(): string {
    return `data.${this.resourceType}.${this.resourceName}.snapshot_schedule_policy`;
  }
}
