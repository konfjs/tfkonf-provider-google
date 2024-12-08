import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeSnapshotIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleComputeSnapshotIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleComputeSnapshotIamBindingArgsCondition;
}

export class google_compute_snapshot_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeSnapshotIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_snapshot_iam_binding", resourceName);
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

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
