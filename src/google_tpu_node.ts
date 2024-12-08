import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleTpuNodeArgsSchedulingConfig {
  preemptible: boolean;
}

export interface GoogleTpuNodeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleTpuNodeArgs {
  accelerator_type: string;
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  tensorflow_version: string;
  use_service_networking?: boolean;
  scheduling_config?: GoogleTpuNodeArgsSchedulingConfig;
  timeouts?: GoogleTpuNodeArgsTimeouts;
}

export class google_tpu_node extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleTpuNodeArgs) {
    const meta = {scheduling_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_tpu_node", resourceName);
  }

  get accelerator_type(): string {
    return `${this.resourceType}.${this.resourceName}.accelerator_type`;
  }

  get cidr_block(): string {
    return `${this.resourceType}.${this.resourceName}.cidr_block`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get network_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.network_endpoints`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get tensorflow_version(): string {
    return `${this.resourceType}.${this.resourceName}.tensorflow_version`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
