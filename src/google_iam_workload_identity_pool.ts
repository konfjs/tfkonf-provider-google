import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkloadIdentityPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkloadIdentityPoolArgs {
  description?: string;
  disabled?: boolean;
  display_name?: string;
  workload_identity_pool_id: string;
  timeouts?: GoogleIamWorkloadIdentityPoolArgsTimeouts;
}

export class google_iam_workload_identity_pool extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIamWorkloadIdentityPoolArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iam_workload_identity_pool", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get workload_identity_pool_id(): string {
    return `${this.resourceType}.${this.resourceName}.workload_identity_pool_id`;
  }
}
