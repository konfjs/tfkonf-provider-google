import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageTransferAgentPoolArgsBandwidthLimit {
  limit_mbps: string;
}

export interface GoogleStorageTransferAgentPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleStorageTransferAgentPoolArgs {
  display_name?: string;
  name: string;
  bandwidth_limit?: GoogleStorageTransferAgentPoolArgsBandwidthLimit;
  timeouts?: GoogleStorageTransferAgentPoolArgsTimeouts;
}

export class google_storage_transfer_agent_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleStorageTransferAgentPoolArgs) {
    const meta = {bandwidth_limit:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_storage_transfer_agent_pool", resourceName);
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
}
