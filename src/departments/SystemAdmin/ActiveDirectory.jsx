import React from 'react';

const ActiveDirectory = () => (
  <span>
    <h3>Windows Active Directory</h3>
    <p>We are using a virtual machine on Meltdown (the Mac mini).</p>
    <h3>How to set up DNS Lookup</h3>
    <h5>On windows directory side:</h5>
    <ol>
      <li> Open Server Manager.</li>
      <li>On the top left under “Tools”, click on DNS.</li>
      <li>On the left panel, right click on  WIN-SURF &gt; Forward Lookup Zones &gt; SCADA.lab</li>
      <li> Click on “New Host (A or AAAA)...</li>
      <li>Under the “Name” parameter, enter the hostname of the device you wish to add.</li>
      <li>Under “IP address”, enter the IP address of the device you wish to add. </li>
      <li>Check the “Create associated (PTR) record”.</li>
      <li>When you’re done, click on “Add Host”.</li>
    </ol>
    <h5>On raspberry pi side:</h5>
    <ol>
      <li>Setting up a raspberry pi to use the SCADA.lab DNS server.</li>
      <li>In the pi terminal enter the command: sudo nano /etc/dhcpcd.conf</li>
      <li>This opens the nano text editor.  Go to the bottom of the file and add the line:</li>
      <li>static domain_name_servers=10.1.1.8</li>
      <li>Exit and save the file by pressing ctrl + x, then y, then enter.</li>
      <li>Restart the service with the command:</li>
      <li>sudo service dhcpcd restart</li>
      <li>The pi will use the DNS server now.</li>
    </ol>
    <h3>Getting Time from Server through timedatctl</h3>
    <h5>Warning: Don&apos;t use ntp since it&apos;s outdated</h5>
    <ol>
      <li>Open a Terminal window on your Raspberry Pi.</li>
      <li>Type: &quot;sudo nano /etc/systemd/timesyncd.conf&quot;</li>
      <li>In the &quot;systemd-timesyncd.conf&quot; file, uncomment the &quot;NTP&quot; line by removing the &quot;#&quot; character at the beginning of the line.</li>
      <li>Replace the default NTP server address with the IP address or hostname of your Windows time server (10.1.1.8).</li>
      <ol>
        <li>For example: NTP= win-surf.scada.lab</li>
      </ol>
      <li>Save the changes to the file and exit the editor.</li>
      <li>Type: &quot;sudo systemctl restart systemd-timesyncd.service&quot;</li>
      <li>To verify it’s working, type: &quot;sudo systemctl status systemd-timesyncd.service&quot;</li>
      <ol>
        <li>If working, it should show active (running) in green.</li>
      </ol>
      <li>For additional verification, type: &quot;timedatectl status&quot;</li>
    </ol>
  </span>
);

export default ActiveDirectory;
