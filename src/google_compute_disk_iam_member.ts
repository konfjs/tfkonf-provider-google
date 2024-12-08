import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeDiskIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeDiskIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleComputeDiskIamMemberArgsCondition;
}

export class google_compute_disk_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeDiskIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_disk_iam_member", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
