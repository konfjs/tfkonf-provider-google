import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeRouterNatArgs {
  name: string;
  project?: string;
  region?: string;
  router: string;
}

export class data_google_compute_router_nat extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleComputeRouterNatArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_router_nat", resourceName);
  }

  get auto_network_tier(): string {
    return `data.${this.resourceType}.${this.resourceName}.auto_network_tier`;
  }

  get drain_nat_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.drain_nat_ips`;
  }

  get enable_dynamic_port_allocation(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_dynamic_port_allocation`;
  }

  get enable_endpoint_independent_mapping(): string {
    return `data.${this.resourceType}.${this.resourceName}.enable_endpoint_independent_mapping`;
  }

  get endpoint_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoint_types`;
  }

  get icmp_idle_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.icmp_idle_timeout_sec`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get initial_nat_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.initial_nat_ips`;
  }

  get log_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.log_config`;
  }

  get max_ports_per_vm(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_ports_per_vm`;
  }

  get min_ports_per_vm(): string {
    return `data.${this.resourceType}.${this.resourceName}.min_ports_per_vm`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get nat_ip_allocate_option(): string {
    return `data.${this.resourceType}.${this.resourceName}.nat_ip_allocate_option`;
  }

  get nat_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.nat_ips`;
  }

  get router(): string {
    return `data.${this.resourceType}.${this.resourceName}.router`;
  }

  get rules(): string {
    return `data.${this.resourceType}.${this.resourceName}.rules`;
  }

  get source_subnetwork_ip_ranges_to_nat(): string {
    return `data.${this.resourceType}.${this.resourceName}.source_subnetwork_ip_ranges_to_nat`;
  }

  get subnetwork(): string {
    return `data.${this.resourceType}.${this.resourceName}.subnetwork`;
  }

  get tcp_established_idle_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.tcp_established_idle_timeout_sec`;
  }

  get tcp_time_wait_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.tcp_time_wait_timeout_sec`;
  }

  get tcp_transitory_idle_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.tcp_transitory_idle_timeout_sec`;
  }

  get udp_idle_timeout_sec(): string {
    return `data.${this.resourceType}.${this.resourceName}.udp_idle_timeout_sec`;
  }
}
