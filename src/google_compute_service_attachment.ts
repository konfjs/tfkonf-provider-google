import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeServiceAttachmentArgsConsumerAcceptLists {
  connection_limit: number;
  network_url?: string;
  project_id_or_num?: string;
}

export interface GoogleComputeServiceAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeServiceAttachmentArgs {
  connection_preference: string;
  consumer_reject_lists?: string[];
  description?: string;
  domain_names?: string[];
  enable_proxy_protocol: boolean;
  name: string;
  nat_subnets: string[];
  target_service: string;
  consumer_accept_lists?: GoogleComputeServiceAttachmentArgsConsumerAcceptLists[];
  timeouts?: GoogleComputeServiceAttachmentArgsTimeouts;
}

export class google_compute_service_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeServiceAttachmentArgs) {
    const meta = {consumer_accept_lists:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_service_attachment", resourceName);
  }

  get connected_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.connected_endpoints`;
  }

  get connection_preference(): string {
    return `${this.resourceType}.${this.resourceName}.connection_preference`;
  }

  get enable_proxy_protocol(): string {
    return `${this.resourceType}.${this.resourceName}.enable_proxy_protocol`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get nat_subnets(): string {
    return `${this.resourceType}.${this.resourceName}.nat_subnets`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get propagated_connection_limit(): string {
    return `${this.resourceType}.${this.resourceName}.propagated_connection_limit`;
  }

  get reconcile_connections(): string {
    return `${this.resourceType}.${this.resourceName}.reconcile_connections`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get target_service(): string {
    return `${this.resourceType}.${this.resourceName}.target_service`;
  }
}
