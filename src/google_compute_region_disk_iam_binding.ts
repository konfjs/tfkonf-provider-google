import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionDiskIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeRegionDiskIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleComputeRegionDiskIamBindingArgsCondition;
}

export class google_compute_region_disk_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeRegionDiskIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_region_disk_iam_binding", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
