import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNetworkAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNetworkAttachmentArgs {
  connection_preference: string;
  description?: string;
  name: string;
  producer_accept_lists?: string[];
  producer_reject_lists?: string[];
  subnetworks: string[];
  timeouts?: GoogleComputeNetworkAttachmentArgsTimeouts;
}

export class google_compute_network_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeNetworkAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_network_attachment", resourceName);
  }

  get connection_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.connection_endpoints`;
  }

  get connection_preference(): string {
    return `${this.resourceType}.${this.resourceName}.connection_preference`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get kind(): string {
    return `${this.resourceType}.${this.resourceName}.kind`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
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

  get self_link_with_id(): string {
    return `${this.resourceType}.${this.resourceName}.self_link_with_id`;
  }

  get subnetworks(): string {
    return `${this.resourceType}.${this.resourceName}.subnetworks`;
  }
}
