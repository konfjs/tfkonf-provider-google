import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeTargetPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeTargetPoolArgs {
  backup_pool?: string;
  description?: string;
  failover_ratio?: number;
  health_checks?: string[];
  name: string;
  session_affinity?: string;
  timeouts?: GoogleComputeTargetPoolArgsTimeouts;
}

export class google_compute_target_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeTargetPoolArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_target_pool", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instances(): string {
    return `${this.resourceType}.${this.resourceName}.instances`;
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

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
