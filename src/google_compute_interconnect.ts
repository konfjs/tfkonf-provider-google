import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInterconnectArgsMacsecPreSharedKeys {
  fail_open?: boolean;
  name: string;
  start_time?: string;
}

export interface GoogleComputeInterconnectArgsMacsec {
  fail_open?: boolean;
  pre_shared_keys: GoogleComputeInterconnectArgsMacsecPreSharedKeys[];
}

export interface GoogleComputeInterconnectArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInterconnectArgs {
  admin_enabled?: boolean;
  customer_name?: string;
  description?: string;
  interconnect_type: string;
  labels?: { [key: string]: string };
  link_type: string;
  location?: string;
  macsec_enabled?: boolean;
  name: string;
  noc_contact_email?: string;
  remote_location?: string;
  requested_features?: string[];
  requested_link_count: number;
  macsec?: GoogleComputeInterconnectArgsMacsec;
  timeouts?: GoogleComputeInterconnectArgsTimeouts;
}

export class google_compute_interconnect extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInterconnectArgs) {
    const meta = {macsec:{isBlock:true,pre_shared_keys:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_interconnect", resourceName);
  }

  get available_features(): string {
    return `${this.resourceType}.${this.resourceName}.available_features`;
  }

  get circuit_infos(): string {
    return `${this.resourceType}.${this.resourceName}.circuit_infos`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get expected_outages(): string {
    return `${this.resourceType}.${this.resourceName}.expected_outages`;
  }

  get google_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.google_ip_address`;
  }

  get google_reference_id(): string {
    return `${this.resourceType}.${this.resourceName}.google_reference_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get interconnect_attachments(): string {
    return `${this.resourceType}.${this.resourceName}.interconnect_attachments`;
  }

  get interconnect_type(): string {
    return `${this.resourceType}.${this.resourceName}.interconnect_type`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get link_type(): string {
    return `${this.resourceType}.${this.resourceName}.link_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get operational_status(): string {
    return `${this.resourceType}.${this.resourceName}.operational_status`;
  }

  get peer_ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.peer_ip_address`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get provisioned_link_count(): string {
    return `${this.resourceType}.${this.resourceName}.provisioned_link_count`;
  }

  get requested_link_count(): string {
    return `${this.resourceType}.${this.resourceName}.requested_link_count`;
  }

  get satisfies_pzs(): string {
    return `${this.resourceType}.${this.resourceName}.satisfies_pzs`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
