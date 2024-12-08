import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSnapshotIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSnapshotIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleComputeSnapshotIamMemberArgsCondition;
}

export class google_compute_snapshot_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeSnapshotIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_snapshot_iam_member", resourceName);
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
}
